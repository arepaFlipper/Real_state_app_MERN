import { Add } from '@mui/icons-material'
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const { tableQueryResult: { data, isLoading, isError } } = useTable();
  console.log(`🎡%call-properties.tsx:11 - data`, 'font-weight:bold; background:#38c700;color:#fff;'); //DELETEME
  console.log(data); // DELETEME

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">All Properties</Typography>
        <CustomButton title="Add Property" handleClick={() => navigate('/properties/create')} backgroundColor="#475be8" color="#FCFCFC" icon={<Add />} />
      </Stack>
      <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>

      </Box>
    </Box>
  )
}

export default AllProperties
