import type { InitOptions } from "payload/config";
import payload from "payload";
import dotenv from "dotenv";
import path from "path";
import { NextResponse } from "next/server";

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if(!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    };
}

interface Args {
    initOptions?: Partial<InitOptions>
};

export const getPayloadClient = async ({initOptions}: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET) {
        throw new Error("PAYLOAD_SECRET is not defined");
    }

    if(cached.client) {
        return cached.client;
    }

    if(!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        });
    }

    try {
        cached.client = await cached.promise
        
    } catch (error) {
        cached.promise = null;
        
        console.log(error, "getPayload")
        return new NextResponse("Internal Server Error", { status: 500 });
    }

    return cached.client;
};