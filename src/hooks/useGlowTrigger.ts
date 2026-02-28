import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCtaGlow } from '../context/CtaGlowContext';

/**
 * Hook to trigger the navbar "Book a Call" button glow when this component is in view.
 * @param id Unique identifier for the trigger section.
 */
export const useGlowTrigger = (id: string) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 'some', margin: "-40% 0px -40% 0px" });
    const { registerTrigger, unregisterTrigger } = useCtaGlow();

    useEffect(() => {
        if (isInView) {
            registerTrigger(id);
        } else {
            unregisterTrigger(id);
        }

        return () => unregisterTrigger(id);
    }, [isInView, id, registerTrigger, unregisterTrigger]);

    return ref;
};
