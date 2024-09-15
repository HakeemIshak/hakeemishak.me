const PersonalWebsite = () => {

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
            description: 'Free Online AI Photo Editor, Image Generator & Design too',
            url: 'https://pixlr.com',
        },
        {
            name: '123RF',
            description: "Stock Photos, Vectors and Royalty Free Images from 123RF",
            url: 'https://123rf.com'
        },
        {
            name: 'Vectr',
            description: 'AI-Powered Background Remover & Photo, Logo, and SVG Generators',
            url: 'https://vectr.com',
        },
        {
            name: 'Biztory',
            description: 'Cloud Based Accounting Software in Malaysia | Biztory',
            url: 'https://biztory.com.my',
        },
    ];

    return (
        <div className="wrapper">
            <h1>Hakeem Ishak</h1>
            <p>Senior Full Stack Developer @ Pixlr</p>

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

                <p className="ceil">Hey there! I&#39;m a Software Engineer with 5 years of experience, mainly working with the MERN stack. I handle a lot of backend and DevOps operations using AWS. I&#39;ve worked on several SaaS projects before like Biztory, 123RF, and Vectr.</p>
                <p className="ceil">If you want to chat about tech or have a project in mind, you can reach me on <a className="underline" href={links[0].href} rel="noreferrer">LinkedIn</a> or shoot me an <a href="mailto:pm@hakeemishak.me">email</a>.</p>

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
                            {project.name} - {project.description}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PersonalWebsite;
