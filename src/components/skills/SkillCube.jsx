// SkillCube.jsx – optional 3D cube for skill visualization
// Requires @react-three/fiber + @react-three/drei
import React, { useRef } from 'react'

export default function SkillCube({ color = '#00FFB2', label = 'Skill' }) {
  // TODO: implement with @react-three/fiber Canvas + useFrame rotation
  return (
    <div style={{
      width: 80, height: 80,
      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
      border: `1px solid ${color}66`,
      borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
      color,
    }}>
      {label}
    </div>
  )
}
