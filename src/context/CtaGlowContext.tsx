import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

interface CtaGlowContextType {
    registerTrigger: (id: string) => void;
    unregisterTrigger: (id: string) => void;
    isGlowActive: boolean;
}

const CtaGlowContext = createContext<CtaGlowContextType | undefined>(undefined);

export const CtaGlowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeTriggers, setActiveTriggers] = useState<Set<string>>(new Set());

    const registerTrigger = useCallback((id: string) => {
        setActiveTriggers((prev) => {
            const next = new Set(prev);
            next.add(id);
            return next;
        });
    }, []);

    const unregisterTrigger = useCallback((id: string) => {
        setActiveTriggers((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
                return next;
            }
            return prev;
        });
    }, []);

    const isGlowActive = useMemo(() => activeTriggers.size > 0, [activeTriggers]);

    return (
        <CtaGlowContext.Provider value={{ registerTrigger, unregisterTrigger, isGlowActive }}>
            {children}
        </CtaGlowContext.Provider>
    );
};

export const useCtaGlow = () => {
    const context = useContext(CtaGlowContext);
    if (!context) {
        throw new Error('useCtaGlow must be used within a CtaGlowProvider');
    }
    return context;
};
