import React, { useState } from "react";

const Home = () => {
    const [user, setUser] = useState(false);

    return (
        <div class="container p-5 my-5 border text-center">
            <h1>Home</h1>
            <br/><hr/><br/>
            <h3><b>{user ? "Conectado" : "Desconectado"}</b></h3><br/>
            {user ? (
                <button className="btn btn-danger" onClick={() => setUser(false)}>Close Session</button>
            ) : (
                <button className="btn btn-primary" onClick={() => setUser(true)}>Start Session</button>
            )}
        </div>
    );
};

export default Home;