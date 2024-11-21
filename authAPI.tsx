


  // TODO: make a POST request to the login route
  
  async function loginUser(username: string, password: string): Promise<void> {
    const response = await fetch('http://your-api-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login successful:', data);
    // Store the JWT or handle the response as needed
}
 


     





