import { ProfileForm } from '@src/layers/modules/session/components';
import { updateProfileFx } from '@src/layers/modules/session/store';

export const ProfilePage = () => {
	return <ProfileForm onSubmit={updateProfileFx} />;
};
