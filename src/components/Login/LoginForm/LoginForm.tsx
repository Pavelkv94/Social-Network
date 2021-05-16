

export const LoginForm = (props: any) => {

    return (
        <form>
            <div>
                <input type="text" placeholder="login" />
            </div>
            <div>
                <input type="password" placeholder="password" />
            </div>
            <div>
                <input type="checkbox" /> remember me
                </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

