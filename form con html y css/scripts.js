const d = document,
    $btnSignIn = d.querySelector('.sign-in-btn'),
    $btnSignUp = d.querySelector('.sign-up-btn'),
    $signIn = d.querySelector('.sign-in'),
    $signUp = d.querySelector('.sign-up');


document.addEventListener('click', (e) => {
    if (e.target === $btnSignIn) {
        $signUp.classList.remove('hidden');
        $signIn.classList.add('hidden');
    } else if (e.target === $btnSignUp) {
        $signIn.classList.remove('hidden');
        $signUp.classList.add('hidden');
    }

    // console.log(e.target);
});
