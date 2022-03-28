// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { supabase } from "../utils/supabaseClient";
import { PlasmicAuthComponent } from "./plasmic/chat_app/PlasmicAuthComponent";
import { useRouter } from "next/router";

function AuthComponent_(props, ref) {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [authError, setAuthError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    return (
        <PlasmicAuthComponent
            root={{ ref }}
            {...props}
            isError={!!authError}
            errorMessage={authError?.message}
            isLoading={loading}
            emailInput={{
                value: email,
                onChange: e => setEmail(e.target.value),
            }}
            passwordInput={{
                value: password,
                onChange: e => setPassword(e.target.value),
            }}
            submitButton={{
                onClick: async () => {
                    setLoading(true);
                    setAuthError(null);
                    try {
                        let authFunction = null;
                        if (props.isSignUpFlow) {
                            authFunction = await supabase.auth.signUp({
                                email,
                                password,
                            });
                        } else {
                            authFunction = await supabase.auth.signIn({
                                email,
                                password,
                            });
                        }

                        const { error } = authFunction;
                        if (error) {
                            setAuthError(error);
                            return;
                        }

                        router.replace("/");
                    } catch (err) {
                        setAuthError(err);
                    } finally {
                        setLoading(false);
                    }
                },
            }}
        />
    );
}

const AuthComponent = React.forwardRef(AuthComponent_);

export default AuthComponent;
