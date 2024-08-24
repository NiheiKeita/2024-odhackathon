import { useForm } from "@inertiajs/react";
import { FormEventHandler, useCallback, useEffect, useState } from "react";

export const useSearch = () => {
  const [selectHouseId, setSelectHouseId] = useState<number>()
  const handleHouseClick = useCallback((id: number) => {
    setSelectHouseId(id)
  }, [setSelectHouseId])
  const handleModalClose = useCallback(() => {
    setSelectHouseId(undefined)
  }, [setSelectHouseId])
  return {
    handleHouseClick,
    selectHouseId,
    setSelectHouseId,
    handleModalClose
  }
}