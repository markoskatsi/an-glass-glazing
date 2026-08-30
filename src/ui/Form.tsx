import { Button, ButtonTray } from "./Button";
import { useForm } from "../hooks/useForm.tsx";
import { useState } from "react";
import { Loading } from "./Loading.tsx";

export const Form = ({
  children,
  onSubmit,
  submitText,
  message,
}: {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  onCancel?: () => void;
  submitText?: string;
  message?: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="FormTray">{children}</div>
      {message}
      <ButtonTray>
        <Button type="submit">
          {isLoading ? <Loading /> : submitText}
        </Button>
      </ButtonTray>
    </form>
  );
};

const Item = ({
  children,
  label,
  htmlFor,
  error,
}: {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
  error?: string | null;
}) => {
  return (
    <div className="FormItem">
      <label className="FormLabel" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && <p className="FormError">{error}</p>}
    </div>
  );
};

Form.Item = Item;
Form.useForm = useForm;
