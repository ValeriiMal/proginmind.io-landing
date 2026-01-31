type EmailTemplateProps = {
    name: string
    email: string
    company?: string
    message: string
}

export function EmailTemplate({ name, email, company, message }: EmailTemplateProps) {
    return (
        <div>
            <div>Full name: {name}</div>
            <div>Email: {email}</div>
            <div>Company name: {company}</div>
            <div>Project details: {message}</div>
        </div>
    )
}