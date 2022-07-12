import React from 'react'
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';

export default function LeagueEdit({}) {
  
  let location = useLocation()
  let leagueToEdit = location.state
  console.log('leagueToEdit', leagueToEdit)
  
  return (
    <div>league edit </div>
  )
}