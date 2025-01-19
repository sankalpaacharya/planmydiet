type Props = {};
import ChallengeProgress from '@/components/homepage/challengeProgress'

export default function HomePage({ }: Props) {
  return (
    <ChallengeProgress planDuration={30} currDay={14} />
  );
}
