import { axiosApi } from '../api';

const GetProfile = async () => {
  const response = await axiosApi.get('/diplomat/getDiplomatProfile');
  return response.data;
};

export default GetProfile;
