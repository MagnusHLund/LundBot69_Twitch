interface IStandardInputProps {
  isDisabled?: boolean
  onClick?: () => void
  onChange?: (e: any) => void
  cursor?: 'auto' | 'pointer' | 'grabbing' | 'help' | 'grab'
}

export default IStandardInputProps
