// app/api/health/route.ts
import { NextResponse } from 'next/server';

// Define response type
export type HealthCheckResponse = {
    status: string;
    timestamp: string;
    uptime: number;
    environment: string;
};

// GET handler for health check
export async function GET() {
    try {
        const response: HealthCheckResponse = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        const errorResponse: HealthCheckResponse = {
            status: 'error',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}