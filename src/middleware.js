import { NextResponse } from "next/server";

export default function middleware(req) {
    const isLoggedIn = req.cookies.get("loggedIn");
    const url = req.url;


    if (!isLoggedIn && (url.includes("/email") || url.includes("/admin"))) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    if (isLoggedIn && (url.includes("/login"))) {
        return NextResponse.redirect(new URL('/admin', req.url))
    }

}