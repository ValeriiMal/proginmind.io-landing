type EmailTemplateProps = {
    name: string
    email: string
    company?: string
    message?: string
    source?: string
}

export function EmailTemplate({ name, email, company, message, source }: EmailTemplateProps) {
    return (
        <div>
            {source && <div style={{ marginBottom: '8px', color: '#6b7280', fontSize: '12px' }}>Source: {source}</div>}
            <div>Full name: {name}</div>
            <div>Email: {email}</div>
            <div>Company name: {company}</div>
            <div>Message: {message}</div>
        </div>
    )
}