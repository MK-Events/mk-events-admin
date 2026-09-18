import { Group } from "@mantine/core";
import { useAppConfig } from "@mk/hooks";
import { useAppDispatch, useLogoutMutation } from "@mk/store";
import { setAuthenticated } from "@mk/store/slice/authSlice";
import { IconLogout } from "@tabler/icons-react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconManager } from "../IconManager";
import { MKEventsLogo } from "../Logo";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const config = useAppConfig();

  const links = config.links.map((item) => (
    <NavLink
      className={styles.link}
      end={item.link === "/"}
      to={item.link}
      key={item.label}
    >
      <IconManager
        iconName={item.label}
        iconSize={20}
        className={styles.linkIcon}
      />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>
        <Group className={styles.header} justify="space-between">
          <MKEventsLogo
            type="icon"
            theme="dark"
            relativeSize="small"
            logoText
          />
        </Group>
        {links}
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.link}
          onClick={async () => {
            await logout()
              .unwrap()
              .catch(() => undefined);
            dispatch(setAuthenticated(false));
            navigate("/login", { replace: true });
          }}
        >
          <IconLogout className={styles.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}
