import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import './main.css';

export const links: LinksFunction = () => [
    {
        rel: 'icon',
        href: '/favicon.jpg',
        type: 'image/jpg',
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap',
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />

                <meta name="description" content="Hakeem Ishak personal website" />
                <meta property="og:site_name" content="HI | Hakeem Ishak"/>
                <meta property="og:title" content="HI | Hakeem Ishak" />
                <meta property="og:description" content="Hakeem Ishak personal website" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hakeemishak.me/" />

                <title>HI | Hakeem Ishak</title>

                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
