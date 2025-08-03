export type Course = {
    title: string;
    price: number;
    thumbnail: string;
    slug?: string;
    description: string;
    tenant: string
    code?: string;
    html?: string
}

export type Tenant = {
    name: string;
    logo: string;
    isVerified: boolean;
    description: string;
    slug?: string;
    html?: string
}