export interface SlideButtonProps {
    button: {
        onPrev: () => void;
        onNext: () => void;
        canPrev: boolean;
        canNext: boolean;
    }
}