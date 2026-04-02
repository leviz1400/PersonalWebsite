/*useEffect(() => {
    let isMounted = true;
    const uploadData = async () => {
        const response = await fetch("https://tvu-game-data-default-rtdb.firebaseio.com/GlobalVars/TimeOfDay.json?auth=kjW4Mt8kqDAQoqnlMlbC2t6NyyCiU6CNWWPkNMnQ", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(12)
        });
        const data = await response.json();
        console.log(data);
    }
    uploadData();

    return () => {
        isMounted = false;
    }

}, []); */