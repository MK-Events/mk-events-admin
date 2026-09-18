import {
  Alert,
  Button,
  Card,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useAppDispatch, useAppSelector, useLoginMutation } from "@mk/store";
import { setAuthenticated } from "@mk/store/slice/authSlice";
import { IconArrowRight, IconLock, IconMail } from "@tabler/icons-react";
import { useEffect, useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { MKEventsLogo } from "@mk/components";
import { useAppConfig, usePageConfig } from "@mk/hooks";
import styles from "./Login.module.scss";

export function Login() {
  const { businessName } = useAppConfig();
  const { welcomeMessage, longMessage, loginPrompt, labels } =
    usePageConfig("login");
  const [login, { isLoading, error: loginError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const from =
        (location.state as { from?: { pathname?: string } } | null)?.from
          ?.pathname ?? "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate]);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await login({ email, password });
    if ("data" in result) {
      dispatch(setAuthenticated(true));
      const from =
        (location.state as { from?: { pathname?: string } } | null)?.from
          ?.pathname ?? "/";
      navigate(from, { replace: true });
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <MKEventsLogo type="icon" theme="dark" relativeSize={"medium"} />
        <Text className={styles.kicker}>{businessName}</Text>
        <Title order={1}>{welcomeMessage}</Title>
        <Text className={styles.description}>{longMessage}</Text>
      </section>
      <Card
        component="form"
        onSubmit={handleSubmit}
        className={styles.card}
        withBorder
        radius="lg"
        padding="xl"
      >
        <Stack gap="lg">
          <div>
            <Title order={2}>Sign in</Title>
            <Text c="dimmed" size="sm" mt={5}>
              {loginPrompt}
            </Text>
          </div>
          {loginError && (
            <Alert color="red" variant="light" className={styles.alert}>
              {"data" in loginError && typeof loginError.data === "string"
                ? loginError.data
                : "The email or password is incorrect."}
            </Alert>
          )}
          <TextInput
            label={labels.emailLabel}
            placeholder={labels.emailPlaceholder}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            leftSection={<IconMail size={17} />}
            required
            autoComplete="email"
          />
          <PasswordInput
            label={labels.passwordLabel}
            placeholder={labels.passwordPlaceholder}
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            leftSection={<IconLock size={17} />}
            required
            autoComplete="current-password"
          />
          <Button
            type="submit"
            size="md"
            loading={isLoading}
            rightSection={<IconArrowRight size={17} />}
          >
            {labels.signinButton}
          </Button>
        </Stack>
      </Card>
    </main>
  );
}

export default Login;
