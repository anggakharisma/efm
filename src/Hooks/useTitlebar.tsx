import { useState } from 'react'

export default function useTitlebar() {
	const [titlebar, setTitlebar] = useState<string>('EFM')

	return [titlebar, setTitlebar] as const
}
