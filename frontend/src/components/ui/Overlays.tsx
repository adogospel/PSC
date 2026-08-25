import {
  useEffect,

  type PropsWithChildren,
  type ReactNode,
} from "react";

import {
  X,
} from "lucide-react";

import Button from "@/components/ui/Button";

import IconButton from "@/components/ui/IconButton";

import {
  cn,
} from "@/lib/utils";

type DialogProps =
  PropsWithChildren<{
    open: boolean;

    title: string;

    description?: string;

    onClose: () => void;
  }>;

export function Dialog({
  open,

  title,

  description,

  onClose,

  children,
}: DialogProps) {
  useEffect(
    () => {
      if (!open) {
        return;
      }

      const handleKey =
        (
          event: KeyboardEvent,
        ) => {
          if (
            event.key ===
            "Escape"
          ) {
            onClose();
          }
        };

      document.addEventListener(
        "keydown",
        handleKey,
      );

      return () => {
        document.removeEventListener(
          "keydown",
          handleKey,
        );
      };
    },

    [
      open,
      onClose,
    ],
  );

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/35 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={
        onClose
      }
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="surface w-full max-w-lg rounded-4xl p-6"
        onMouseDown={(
          event,
        ) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              {title}
            </h2>

            {description && (
              <p className="mt-2 text-sm leading-6 text-muted">
                {
                  description
                }
              </p>
            )}
          </div>

          <IconButton
            aria-label="Fermer"
            onClick={
              onClose
            }
          >
            <X size={18} />
          </IconButton>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export const Modal =
  Dialog;

type DrawerProps =
  PropsWithChildren<{
    open: boolean;

    title: string;

    onClose: () => void;
  }>;

export function Drawer({
  open,

  title,

  onClose,

  children,
}: DrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/35 backdrop-blur-sm"
      onMouseDown={
        onClose
      }
    >
      <aside
        className="absolute right-0 top-0 h-full w-[min(90vw,420px)] bg-ivory p-6 shadow-float"
        onMouseDown={(
          event,
        ) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold">
            {title}
          </h2>

          <IconButton
            aria-label="Fermer"
            onClick={
              onClose
            }
          >
            <X size={18} />
          </IconButton>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </aside>
    </div>
  );
}

type ConfirmDialogProps = {
  open: boolean;

  title: string;

  description: string;

  confirmLabel?: string;

  onConfirm: () => void;

  onClose: () => void;
};

export function ConfirmDialog({
  open,

  title,

  description,

  confirmLabel = "Confirmer",

  onConfirm,

  onClose,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      title={title}
      description={
        description
      }
      onClose={
        onClose
      }
    >
      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={
            onClose
          }
        >
          Annuler
        </Button>

        <Button
          onClick={
            onConfirm
          }
        >
          {
            confirmLabel
          }
        </Button>
      </div>
    </Dialog>
  );
}

export function Tooltip({
  label,

  children,
}: {
  label: string;

  children: ReactNode;
}) {
  return (
    <span className="group relative inline-flex">
      {children}

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[11px] text-white opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}

export function Dropdown({
  label,

  children,

  className,
}: PropsWithChildren<{
  label: ReactNode;

  className?: string;
}>) {
  return (
    <details
      className={cn(
        "relative",

        className,
      )}
    >
      <summary className="cursor-pointer list-none">
        {label}
      </summary>

      <div className="surface absolute right-0 z-30 mt-2 min-w-52 rounded-2xl p-2">
        {children}
      </div>
    </details>
  );
}