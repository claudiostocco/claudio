import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveItemProps extends LinkProps {
    children: ReactElement
    shouldMatchExactHref?: boolean
}

export function ActiveItem({ children, shouldMatchExactHref = false, ...rest }: ActiveItemProps) {
    const { asPath } = useRouter();
    const isActive = (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) ||
                     (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as))));

    return (
        <Link {...rest} passHref legacyBehavior>
            {cloneElement(children,{
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}