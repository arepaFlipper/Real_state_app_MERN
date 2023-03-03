import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "../../constants";
interface IProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({ title, percentage, color }: IProgressBarProps) => {
  return (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#11142d">{title}</Typography>
        <Typography fontSize={16} fontWeight={500} color="#11142d">{percentage}%</Typography>
      </Stack>
      <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#E4E8EF">
        <Box width={`${percentage}%`} bgcolor={color} position="absolute" height="100%" borderRadius={1} />
      </Box>
    </Box>
  )
}

const PropertyReferrals = () => {
  return (
    <Box p={4} flex={1} minWidth={490} bgcolor="#FCFCFC" id="chart" display="flex" flexDirection="column" borderRadius="15px">

      <Typography fontSize={18} fontWeight={600} color="#11142D">Property Referrals</Typography>
      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map(({ title, percentage, color }) => {
          return <ProgressBar key={title} title={title} percentage={percentage} color={color} />
        })}
      </Stack>
    </Box>
  )
}

export default PropertyReferrals
