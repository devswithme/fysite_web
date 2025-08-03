import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {marked} from 'marked'
import {Course, Tenant} from "./types";

export const loadCourses = () => {
    const postsDir = path.join(process.cwd(), 'content/courses');
    const filenames = fs.readdirSync(postsDir);

    const courses: Course[] = filenames.map(filename => {
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            title: data.title,
            price: data.price,
            thumbnail: `/courses/${data.thumbnail}`,
            description: data.description,
            tenant: data.tenant,
        };
    });

    return courses;
}

export const loadTenants = () => {
    const postsDir = path.join(process.cwd(), 'content/tenants');
    const filenames = fs.readdirSync(postsDir);

    const tenants: Tenant[] = filenames.map(filename => {
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            name: data.name,
            isVerified: data.isVerified,
            logo: `/tenants/${data.logo}`,
            description: data.description,
        };
    });

    return tenants;
}

export const loadCourse = (slug: string): Course => {
    const filePath = path.join(process.cwd(), 'content/courses', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Course not found: ${slug}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        title: data.title,
        price: data.price,
        thumbnail: `/courses/${data.thumbnail}`,
        description: data.description,
        tenant: data.tenant,
        code: data.code,
        html: marked(content) as string,
    };
}

export const loadTenant = (slug: string): Tenant => {
    const filePath = path.join(process.cwd(), 'content/tenants', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Tenant not found: ${slug}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        name: data.name,
        logo: `/tenants/${data.logo}`,
        isVerified: data.isVerified,
        description: data.description,
        html: marked(content) as string,
    };
}