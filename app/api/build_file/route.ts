import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    const fileBuilds = await prisma.fileBuild.findMany();
    return NextResponse.json({ data: fileBuilds });
}