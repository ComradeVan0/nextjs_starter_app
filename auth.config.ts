import type {NextAuthConfig} from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = auth?.user?.name === 'Admin' ? nextUrl.pathname.startsWith('/dashboard/admin')
                : nextUrl.pathname.startsWith('/dashboard/user');
            if (isOnDashboard) {
                return isLoggedIn;
                // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                const url = auth?.user?.name === 'Admin' ? '/dashboard/admin' : '/dashboard/user'
                return Response.redirect(new URL(url, nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
