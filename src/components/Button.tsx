import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva("border rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
            default: "h-12",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button
            className={buttonStyles({
                variant,
                size,
                className,
            })}
            {...otherProps}
        />
    );
}
