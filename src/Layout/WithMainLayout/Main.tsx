import React, { ComponentType } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper'
import Content from '../../Components/ContentMain/ContentMain'
import Frame from '../../Components/Frame/Frame'

export default function withMainLayout<T>(
	Component: ComponentType<T>
) {
	return (props: T) => (
		<>
			<Frame />
			<ContentWrapper>
				<Header />
				<Sidebar />
				<Content>
					<Component {...props} />
				</Content>
				<Footer />
			</ContentWrapper>
		</>
	)
}
