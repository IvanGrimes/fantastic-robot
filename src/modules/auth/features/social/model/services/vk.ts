import { routes } from '@utils/routes';
import { service } from '@modules/services';

export type VkInput = { code: string };

export const openVkDialog = () => {
  window.location.href = `https://oauth.vk.com/authorize?client_id=${process.env.VK_APP_ID}&redirect_uri=https://fantastic-robot.now.sh${routes.vk}&response_type=code&v=5.103`;
};

export const vk = (input: VkInput) => service.post('/api/user/vk-auth', input);
