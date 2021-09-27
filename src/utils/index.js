export const fetchRequest = async (username, email, pass, desc, city, from) => {
    try {
        const response = await fetch("http://localhost:8800/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: pass,
                desc: desc,
                city: city,
                from: from,
            }),
        });
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}