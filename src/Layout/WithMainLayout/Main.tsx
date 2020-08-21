import React, { ComponentType } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper'
import ContentMain from '../../Components/ContentMain/ContentMain'
import Frame from '../../Components/Frame/Frame'

export default function withMainLayout<T>(
	Component: ComponentType<T>
) {
	return (props: T) => (
		<>
			<ContentWrapper>
				<Frame />
				<Header />
				<Sidebar />
				<ContentMain>
					<Component {...props} />
				</ContentMain>
				<Footer />
			</ContentWrapper>
		</>
	)
}
