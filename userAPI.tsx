const retrieveUsers = async () => {
  const userResponse = await fetch('/api/users', {
    headers: {
        'Content-Type': 'application/json'

    }
  });

  
}