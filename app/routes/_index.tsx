const PersonalWebsite = () => {

    const name = 'Hakeem Ishak';
    const title = 'Senior Full Stack Developer @ Pixlr';

    const description = "Hey there! I'm a Software Engineer with 5 years of experience, mainly working with the MERN stack. I handle a lot of backend and DevOps operations using AWS. I've worked on several SaaS projects before like Biztory, 123RF, and Vectr.";
    const reachOut = "If you want to chat about tech or have a project in mind, you can reach me on LinkedIn or shoot me an email."

    const links = [
        {
            icon: '/linkedin.svg',
            href: 'https://www.linkedin.com/in/hakeemishak/',
            label: 'LinkedIn',
        },
        {
            icon: '/github.svg',
            href: 'https://github.com/HakeemIshak',
            label: 'GitHub',
        },
    ];

    const projects = [
        {
            name: 'Pixlr',
            description:
                'Free Online AI Photo Editor, Image Generator &amp; Design too',
            url: 'https://pixlr.com',
        },
        {
            name: 'Vectr',
            description:
                'AI-Powered Background Remover & Photo, Logo, and SVG Generators',
            url: 'https://vectr.com',
        },
        {
            name: 'Biztory',
            description:
                'Cloud Based Accounting Software in Malaysia | Biztory',
            url: 'https://biztory.com.my',
        },
    ];

    return (
        <div className="wrapper">
            <h1>{name}</h1>
            <p>{title}</p>

            <div className="social">
                {links.map((link) => (
                    <a
                        key={link.label}
                        title={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={link.icon} alt={link.label} />
                    </a>
                ))}
            </div>

            <section className="me ceiling-3">
                <h3>About Me?</h3>

                <p className="ceil">{description}</p>
                <p className="ceil">{reachOut}</p>

                <br />
                <p className="ceil strong">
                    Let&#39;s get in touch! 😉
                </p>
            </section>

            <section className="more-more ceiling-3">
                <h3>More and more...</h3>

                <div className="more ceiling">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.url}
                            title={project.name}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {project.description}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PersonalWebsite;
