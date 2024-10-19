import axios from "axios";
import { NextResponse } from "next/server";

const fetchData = async (token) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/profile/view`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = ["/", "/feeds", "/profile"];

  const isProtectedPath = protectedPaths.includes(request.nextUrl.pathname);

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const isAuthenticated = await fetchData(token);

    if (isAuthenticated && ["/"].includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/feeds", request.url));
    }

    if (
      isAuthenticated &&
      ["/login", "/register"].includes(request.nextUrl.pathname)
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
