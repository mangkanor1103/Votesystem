import { Head, Link } from '@inertiajs/react';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={styles.body}>
            <Head title="Welcome" />

            <div style={styles.container}>
                <h1 style={styles.title}>Mindoro State University Online Voting System</h1>

                {/* Information about the system */}
                <div style={styles.inputGroup}>
                    <input
                        type="text"
                        placeholder="Enter Voter ID"
                        style={styles.input}
                    />
                </div>
                <div style={styles.buttons}>
                    <button
                        style={isHovered ? { ...styles.btn, ...styles.btnHover } : styles.btn}
                        className="btn-hover"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <i className="fas fa-check" style={styles.btnIcon}></i> Submit
                    </button>

                    {/* Sub Admin Button - Link to Sub Admin Dashboard */}
                    <Link
                        href={route('sub-admin.dashboard')}  // Use route helper for Sub Admin
                        style={isHovered ? { ...styles.btn, ...styles.btnHover } : styles.btn}
                        className="btn-hover"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <i className="fas fa-user" style={styles.btnIcon}></i> Sub Admin
                    </Link>

                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={300}
                        classNames="fade"
                    >
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            style={styles.btn}
                        >
                            <i className="fas fa-user-shield" style={styles.btnIcon}></i> Super Admin
                        </Link>
                    </CSSTransition>
                </div>

                {/* Contact information */}
                <p style={styles.contactInfo}>
                    If you want to create your own election, please <a href="https://www.facebook.com/profile.php?id=61568601145118" style={styles.contactLink}>contact us</a>.
                </p>
            </div>
        </div>
    );
}

const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        background: 'linear-gradient(135deg, #2e8b57 0%, #32cd32 100%)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        overflow: 'hidden',
        padding: '10px', // Padding for smaller screens
    },
    container: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px', // Limit width for larger screens
        transition: 'transform 0.3s ease-in-out',
    },
    title: {
        fontSize: '24px',
        color: '#2d3436',
        marginBottom: '15px',
        fontWeight: '700',
        letterSpacing: '1px',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    input: {
        padding: '12px',
        width: '100%',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '10px',
        background: '#f9f9f9',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: '0.3s all ease-in-out',
        outline: 'none',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#2e8b57',
        color: 'white',
        padding: '10px 20px',
        fontSize: '14px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transition: '0.3s ease-in-out',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    },
    btnHover: {
        backgroundColor: '#32cd32',
        transform: 'scale(1.05)',
    },
    btnIcon: {
        fontSize: '16px',
    },
    contactInfo: {
        marginTop: '20px',
        fontSize: '13px',
        color: '#888',
    },
    contactLink: {
        color: '#2e8b57',
        textDecoration: 'underline',
    },
};
