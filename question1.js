
function printLikes(users) {
    let message = "";
    let numberOfPeople = users.length;

    if (numberOfPeople == 0) {
        console.log(message);
        return;
    }

    if (numberOfPeople == 1) {
        message += users[0];
        console.log(message);
        return
    }

    if (numberOfPeople == 2) {
        message += users[0] + " and " + users[1];
        // window.alert("nb: "+numberOfPeople);
        console.log(message);
        return
    }

    if (numberOfPeople > 2) {
        message += users[0] + ", " + users[1] + ", and " + (numberOfPeople - 2) + " others like your post";
        console.log(message);
        return
    }
}
printLikes(['Saleem', 'Osama']) // Saleem and Osama
printLikes(['Saleem', 'Ameer', 'Khaled', 'Ahmed']) // Saleem, Ameer, and 2 others like your post
printLikes(['Fatima']) // Fatima
printLikes([]) // 