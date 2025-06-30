export default function HeadingSmall({ title, description }: { title: string; description?: string }) {
    return (
        <header className="space-y-1">
            <h3 className="text-base font-medium text-text-primary">{title}</h3>
            {description && <p className="text-base text-text-secondary">{description}</p>}
        </header>
    );
}
