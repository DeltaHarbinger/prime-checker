import { expect, describe, it } from "vitest";
import { fireEvent, render, screen, type RenderResult } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import PrimeChecker from "@/lib/PrimeChecker.svelte";
import type { UserEvent } from "@testing-library/user-event/dist/types/setup";

const setup = (element): { user: UserEvent, render: RenderResult } => {
    return {
        user: userEvent.setup(),
        render: render(element)
    }
}

describe('Testing prime input element and result reactivity', async () => {
    it('Mount component', () => {
        const { container } = render(PrimeChecker)
        expect(container).toBeTruthy()
    })
    
    it('Check if zero is prime', async () => {
        const { user, render: { container } } = setup(PrimeChecker)
        expect(container.innerHTML).toContain("Result took")
        const primeInput = screen.getByLabelText("prime-input") as HTMLInputElement
        
        await fireEvent.change(primeInput, { target: { value: '' } })
    
        await user.click(primeInput)
        await user.keyboard("0")
        
        const primeCheckResult = screen.getByLabelText("prime-check-result")
        expect(primeCheckResult.innerHTML).toContain("No, that's not a prime number!")
    })
    
    it('Check real prime', async () => {
        const { user, render: { container } } = setup(PrimeChecker)
        expect(container.innerHTML).toContain("Result took")
        const primeInput = screen.getByLabelText("prime-input") as HTMLInputElement
        
        await fireEvent.change(primeInput, { target: { value: '' } })
    
        await user.click(primeInput)
        await user.keyboard("23")
        
        const primeCheckResult = screen.getByLabelText("prime-check-result")
        expect(primeCheckResult.innerHTML).toContain("That's a prime number!")
    })
    
    it('Check real non-prime', async () => {
        const { user, render: { container } } = setup(PrimeChecker)
        expect(container.innerHTML).toContain("Result took")
        const primeInput = screen.getByLabelText("prime-input") as HTMLInputElement
        
        await fireEvent.change(primeInput, { target: { value: '' } })
    
        await user.click(primeInput)
        await user.keyboard("24")
        
        const primeCheckResult = screen.getByLabelText("prime-check-result")
        expect(primeCheckResult.innerHTML).toContain("No, that's not a prime number!")
    })
    
    it('Check number then change to other', async () => {
        const { user, render: { container } } = setup(PrimeChecker)
        expect(container.innerHTML).toContain("Result took")
        const primeInput = screen.getByLabelText("prime-input") as HTMLInputElement
        
        await fireEvent.change(primeInput, { target: { value: '' } })
    
        await user.click(primeInput)
        await user.keyboard("24")
        
        const primeCheckResult = screen.getByLabelText("prime-check-result")
        expect(primeCheckResult.innerHTML).toContain("No, that's not a prime number!")
        
        await user.keyboard("[Backspace]3")
    
        expect(primeCheckResult.innerHTML).not.toContain("No, that's not a prime number!")
    })
})

