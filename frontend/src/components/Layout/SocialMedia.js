import { Box, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaEnvelope,
} from 'react-icons/fa';

function SocialMedia({ social }) {
	const { instagram, twitter, facebook, linkedin, mail } = social;

	return (
		<Box mx='auto' textAlign='center' my={10}>
			<SocialIcon as={FaInstagram} href={instagram} />
			<SocialIcon as={FaLinkedin} href={linkedin} />
			<SocialIcon as={FaFacebook} href={facebook} />
			<SocialIcon as={FaTwitter} href={twitter} />
			<Link passHref href={`mailto:${mail}`}>
				<Icon boxSize={6} as={FaEnvelope} m={3} />
			</Link>
		</Box>
	);
}

function SocialIcon({ href, ...props }) {
	return (
		<Link passHref href={href}>
			<Icon _hover={{ cursor: 'pointer' }} {...props} boxSize={6} m={3} />
		</Link>
	);
}

export default SocialMedia;
