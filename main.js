/* Variáveis de Cores */
:root {
    --bg-black: #000000;
    --bg-dark: #0a0a0a;
    --bg-card: #050505;
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
    --blue-primary: #2563eb;
    --blue-hover: #1d4ed8;
    --blue-light: #60a5fa;
    --border-color: #1f2937;
}

/* Reset Básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-black);
    color: var(--text-main);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Navegação */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: rgba(0, 0, 0, 0.9);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(30, 58, 138, 0.3);
    backdrop-filter: blur(10px);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    letter-spacing: -1px;
}

.logo span {
    color: var(--blue-primary);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-links a {
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--blue-light);
}

/* Hero Section */
.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
}

.highlight {
    background: linear-gradient(to right, var(--blue-light), var(--blue-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content p {
    font-size: 1.25rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2rem auto;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--blue-primary);
    color: #fff;
    border: none;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
    background-color: var(--blue-hover);
}

.btn-outline {
    background-color: transparent;
    color: var(--blue-primary);
    border: 1px solid var(--blue-primary);
}

.btn-outline:hover {
    background-color: rgba(30, 58, 138, 0.2);
}

/* Seções Gerais */
.section {
    padding: 6rem 2rem;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

.section-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--blue-primary);
    display: inline-block;
}

/* Grid 2 Colunas (Sobre/Skills) */
.grid-2-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.about-text p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

/* Tags de Habilidades */
.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.tag {
    background-color: #0a0a0a;
    border: 1px solid var(--border-color);
    color: var(--blue-light);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s;
}

.tag:hover {
    border-color: var(--blue-primary);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
}

/* Projetos */
.bg-gradient {
    background: linear-gradient(to bottom, var(--bg-black), var(--bg-dark));
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: var(--bg-black);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(37, 99, 235, 0.4);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
}

.project-image {
    height: 200px;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
}

.project-image span {
    font-size: 3rem;
    font-weight: 900;
    color: rgba(59, 130, 246, 0.05);
    letter-spacing: 5px;
}

.project-content {
    padding: 2rem;
}

.project-content h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.75rem;
    transition: color 0.3s;
}

.project-card:hover .project-content h3 {
    color: var(--blue-light);
}

.project-content p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.project-tags span {
    background-color: rgba(30, 58, 138, 0.2);
    color: #93c5fd;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
}

/* Contato */
.contact-section {
    text-align: center;
}

.contact-container p {
    color: var(--text-muted);
    margin: 0 auto 2.5rem auto;
    max-width: 600px;
    font-size: 1.1rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #111;
    border-radius: 50%;
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background-color: var(--blue-primary);
    color: #fff;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
    transform: translateY(-3px);
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: #6b7280;
    font-size: 0.875rem;
}

/* Responsividade */
@media (max-width: 768px) {
    .nav-links {
        display: none; /* Esconde menu no mobile por simplicidade */
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .grid-2-col {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
