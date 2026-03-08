export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    category: string;
    coverImage: string;
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        slug: "future-of-hr-tech-2026",
        title: "The Future of HR Tech in 2026 and Beyond",
        excerpt: "Discover the emerging trends in human resources technology, from AI-driven recruiting to predictive employee retention modeling.",
        content: `
## The Evolution of HR

Human Resources has transformed from an administrative function to a strategic driver of business success. As we move further into 2026, the technology supporting HR professionals continues to evolve at a rapid pace.

### AI-Driven Talent Acquisition
Artificial Intelligence is no longer just sorting resumes. Today, AI systems can predict a candidate's future success within a specific company culture by analyzing thousands of data points during the interview process. 

### Predictive Employee Retention
Why wait for an exit interview to understand why employees leave? Modern HR platforms use predictive modeling to identify flight risks months before an employee hands in their notice, allowing managers to intervene proactively.

### Personalized Learning Paths
Corporate training has moved away from the one-size-fits-all approach. Machine learning algorithms now curate personalized development paths for each employee, aligning their career aspirations with the company's strategic goals.

## Conclusion
The future of HR technology is intelligent, predictive, and deeply personalized. Companies that adopt these tools will have a significant competitive advantage in attracting and retaining top talent.
        `,
        date: "March 8, 2026",
        readTime: "5 min read",
        author: {
            name: "Sarah Jenkins",
            role: "Head of HR Innovation",
            avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" // Assuming some avatars exist, or fallback will apply
        },
        category: "HR Trends",
        coverImage: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" // Assuming we will need some dummy images or use placeholders
    },
    {
        id: "2",
        slug: "building-remote-culture",
        title: "Building a Strong Culture in Remote-First Teams",
        excerpt: "Practical strategies for maintaining team cohesion and company values when your workforce is distributed across the globe.",
        content: `
## The Remote Reality

Remote work is no longer an experiment; it's the standard. However, while productivity often remains high, maintaining a cohesive company culture presents a unique challenge for distributed teams.

### Deliberate Communication
In a traditional office, culture often spreads organically through casual interactions. In remote environments, communication must be deliberate. This means scheduling time for non-work conversations and creating digital spaces for team bonding.

### Rethinking Perks
Free lunches and ping-pong tables don't translate to a remote setting. Companies are redefining perks to focus on home office stipends, mental wellness subscriptions, and flexible hours that truly support work-life integration.

### The Role of Offsites
Many successful remote-first companies are investing heavily in annual or bi-annual company retreats. These in-person gatherings provide the foundational relationships that sustain remote collaboration throughout the year.

## Summary
Building culture in a remote world requires intentional effort. It's about how you communicate, how you support your employees' well-being, and how you foster genuine connections across distances.
        `,
        date: "February 24, 2026",
        readTime: "4 min read",
        author: {
            name: "Marcus Chen",
            role: "Culture Operations Manager",
            avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        category: "Company Culture",
        coverImage: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "3",
        slug: "data-privacy-hr-compliance",
        title: "Navigating Data Privacy and HR Compliance",
        excerpt: "An essential guide to managing employee data securely while complying with evolving global privacy regulations.",
        content: `
## The Compliance Landscape

As HR departments collect increasingly sensitive data about employees, the responsibility to protect that data grows. Navigating the complex web of global privacy regulations is a top priority for HR leaders in 2026.

### Understanding the Regulations
From GDPR in Europe to CPRA in California and emerging laws worldwide, the regulatory environment is fragmented. Organizations must adopt a baseline standard that meets the most stringent requirements to ensure global compliance.

### Data Minimization Strategies
A core principle of modern data privacy is minimization: only collect the data you absolutely need, and only keep it for as long as necessary. HR teams must audit their data collection practices and implement automated retention and deletion policies.

### The Role of Secure Tech Providers
HR departments are increasingly relying on specialized SaaS providers who build compliance into their platforms. When evaluating an HR tech vendor, reviewing their security certifications and data handling practices is just as important as evaluating their features.

## Moving Forward
Compliance is not a one-time project; it's an ongoing process. By prioritizing data privacy, HR departments build trust with employees and protect the organization from significant legal and reputational risks.
        `,
        date: "February 12, 2026",
        readTime: "6 min read",
        author: {
            name: "Elena Rodriguez",
            role: "Chief Compliance Officer",
            avatar: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        category: "Compliance",
        coverImage: "https://images.unsplash.com/photo-1772289767370-9caabfb3f5f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "4",
        slug: "unleashing-employee-potential",
        title: "Unleashing Employee Potential with Performance Analytics",
        excerpt: "How data-driven insights are replacing traditional performance reviews and accelerating professional growth.",
        content: `
## Beyond the Annual Review

The traditional annual performance review is largely obsolete. Today's dynamic workplaces require continuous feedback loops and data-driven insights to truly understand and elevate employee performance.

### Continuous Feedback Systems
Modern performance management relies on frequent, lightweight check-ins rather than single, heavy-weight evaluations. This agile approach allows for immediate course correction and more timely recognition of achievements.

### The Power of Analytics
By analyzing data from project management tools, communication platforms, and goal-tracking software, HR can identify high performers and those who might be struggling before issues escalate. This objective data helps mitigate bias in evaluations.

### Focusing on Development
Performance analytics shouldn't just be about evaluation; it should drive development. By understanding an employee's strengths and areas for improvement, companies can provide targeted training that maximizes their potential.

## Conclusion
Data-driven performance management empowers both managers and employees. It creates a fairer, more transparent environment where growth is continuously supported and measured.
        `,
        date: "January 28, 2026",
        readTime: "5 min read",
        author: {
            name: "David Kim",
            role: "VP of People Operations",
            avatar: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        category: "Performance",
        coverImage: "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
    }
];

export function getAllBlogs(): BlogPost[] {
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
    return getAllBlogs().slice(0, limit);
}
