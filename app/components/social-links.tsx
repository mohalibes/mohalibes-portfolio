import { Flex, rem, useMantineTheme } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export function SocialLinks() {
    const theme = useMantineTheme();

  return (
    <Flex>
      <Link href="https://github.com/mohalibes" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginRight: '4px' }}>
          <IconBrandGithub style={{ width: rem(35), height: rem(35), color: theme.colors.gray[6], transition: 'color 0.3s' }} 
            onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.green[6]}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.gray[6]}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/mohalibes" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <IconBrandLinkedin style={{ width: rem(35), height: rem(35), color: theme.colors.gray[6], transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.green[6]}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.gray[6]}
          />
        </a>
      </Link>
    </Flex>
   
  );
}
