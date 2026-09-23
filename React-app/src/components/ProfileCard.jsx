import profileImage from '../assets/Ai-generated.jpeg'
import './Profilecard.css'

export default function ProfileCard() {
    const user = {
        fullname: "Hemasai",
        age: 22,
        currentStatus: "Student",
        designation: "Fullstack Developer",
        image: profileImage,
        skills: ["JavaScript", "React", "NextJS", "Python", "SQL", "MongoDB", "TailwindCSS", "PostgreSQL", "GoogleConsole", "React Native", "Flutter"],
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-4">
            <div className="card w-100 shadow-lg overflow-hidden border-0 rounded-5" style={{ maxWidth: '24rem' }}>
                {/* <div className="py-5 bg-primary bg-gradient"></div> */}

                <div className="card-body d-flex flex-column align-items-center px-4 pb-4 m-0">
                    <img src={user.image} alt="profile" className="rounded-circle border border-primary border-4 object-fit-cover shadow-lg mt-n5 mb-3" width="128" height="128" />
                    <h1 className="h2 fw-bold text-dark">{user.fullname}, {user.age}</h1>
                    <p className="text-primary fw-semibold mt-1 mb-0">{user.designation}</p>
                    <p className="text-secondary small mt-1 text-capitalize mb-0">{user.currentStatus}</p>

                    <div className="w-100 mt-4">
                        <h2 className="h6 fw-bold text-secondary text-uppercase mb-3 text-center">Skills</h2>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {user.skills.map((skill) => (
                                <span key={skill} className="badge rounded-pill text-bg-light bg-hover-primary border text-secondary fw-medium px-3 py-2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
